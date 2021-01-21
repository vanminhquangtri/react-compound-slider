import React, { useEffect, useState } from 'react'
import { Slider, Handles, Tracks, Rail } from 'react-compound-slider'
import { getOrders, getSetting } from 'api'
import Handle from './components/Handle'
// import Tick from './components/Tick'
import Track from './components/Track'

const sliderStyle = {  // Give the slider some width
    position: 'relative',
    width: '80%',
    height: 80,
    border: '1px solid steelblue',
    margin: '20px auto'
}

const railStyle = {
    position: 'absolute',
    width: '100%',
    height: 10,
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: '#8B9CB6',
}
const RangeSlider = () => {
    const [maxPrice, setMaxPrice] = useState()
    const [price, setPrice] = useState([]) // price range: [min, max]
    const [ordersList, setOrderList] = useState()
    const handleSetting = async () => {
        getSetting('max_value').then((res) => {
            if (res) {
                setMaxPrice(res.data.data[0].setting.max_total_price)
            }
        })
    }
    useEffect(() => {
        handleSetting()
    }, [])

    useEffect(() => {
        const data = {
            total_price: {
                "begin": price.length === 0 ? 0 : parseInt(Math.min(...price).toFixed(0)),
                "end": price.length === 0 ? maxPrice : parseInt(Math.max(...price).toFixed(0)),
            }
        }
        data.total_price.end && getOrders(data).then((res) => {
            if (res) {
                setOrderList(res)
            }
        })
    }, [maxPrice, price])
    window.localStorage.setItem("ordersList", ordersList)
    return (
        maxPrice ? (
            <>
                <Slider
                    rootStyle={sliderStyle /* inline styles for the outer div. Can also use className prop. */}
                    domain={[0, maxPrice]} /* initialize min and max value of slider */
                    values={[0, maxPrice]} /* create 2 handles, one start from 0 and one start from 100000 */
                    step={0.001}
                    onChange={(value) => {
                        setPrice(value)
                    }}
                >
                    <Rail>
                        {({ getRailProps }) => (
                            <div style={railStyle} {...getRailProps()} />
                        )}
                    </Rail>
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                    <Tracks right={false} left={false}>
                        {({ tracks, getTrackProps }) => (
                            <div className="slider-tracks">
                                {tracks.map(({ id, source, target }) => (
                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Tracks>
                    {/* <Ticks count={15}>
                        {({ ticks }) => (
                            <div className="slider-ticks">
                                {ticks.map(tick => (
                                    <Tick key={tick.id} tick={tick} count={ticks.length} />
                                ))}
                            </div>
                        )}
                    </Ticks> */}
                </Slider>
                <br />
                <br />
                <br />
                <div>
                    <h2>Customer name: </h2>
                </div>
            </>
        ) : ''
    );
};

export default RangeSlider;