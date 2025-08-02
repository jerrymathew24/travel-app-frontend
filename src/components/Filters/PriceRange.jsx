import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useFilter } from '../../context/filter-context';

const minDifference = 500;

function valuetext(value) {
    return `${value}`;
}

const PriceRange = () => {

    const { priceRange, filterDispatch } = useFilter()

    console.log(priceRange,"pricerange");
    

    const handlePriceRange = (event, newValue, activeThumb) => {
        if(!Array.isArray(newValue)){
            return;
        }
        if (activeThumb === 0) {
            filterDispatch({
                type: "MINIMUM_PRICE",
                payload: {
                    newValue, priceRange, minDifference
                }
            })
        } else {
            filterDispatch({
                type: "MAXIMUM_PRICE",
                payload: {
                    newValue, priceRange, minDifference
                }
            })

        }
    }

    return (
        <div className="py-[1rem]">
            <span className='font-medium text-2xl'>Price Range</span>
            <Box>
                <Slider
                    className=''
                    getAriaLabel={() => 'Minimum Difference'}
                    value={priceRange}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                    onChange={handlePriceRange}
                    min={100}
                    max={25000}
                    disableSwap
                />
            </Box>
        </div>
    );
}
export default PriceRange;
