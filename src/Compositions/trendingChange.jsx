import { Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function TrendingChange({ id }) {
    const isNegative = parseFloat(id) < 0;
    const bgColor = isNegative ? 'rgba(238, 104, 85, 0.1)' : '#EBF9F4';
    const textColor = isNegative ? '#E96975' : 'rgba(20, 176, 121, 1)';

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: '25px',
            width: '70px',
            borderRadius: 2,
            borderColor: textColor,
            borderWidth: 1,
            margin: 1,
            fontSize: 10,
            backgroundColor: bgColor,
            color: textColor
        }}>
            {id && (
                <>
                    {isNegative ? (
                        <ArrowDropDownIcon />
                    ) : (
                        <ArrowDropUpIcon />
                    )}
                    <h1 className='mx-auto'>{Math.abs(parseFloat(id)).toFixed(2)}%</h1>
                </>
            )}
        </Box>
        
    );
}
