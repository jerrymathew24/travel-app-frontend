import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const value = 1000
function valuetext(value) {
    return `${value}`;
}

const PriceRange = () => {

    return (
        <div className="py-[1rem]">
            <span className='font-medium text-2xl'>Price Range</span>
            <Box sx={{ width: 300 }}>
                <Slider
                    className=''
                    getAriaLabel={() => 'Minimum Difference'}
                    value={value}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                    min={100}
                    max={25000}
                    disableSwap
                />
            </Box>
        </div>
    );
}
export default PriceRange;
