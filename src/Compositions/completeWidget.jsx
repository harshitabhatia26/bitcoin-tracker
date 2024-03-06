import TradingViewWidget from './tradingWidget';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function CompleteWidget() {
    return (
          <List component="nav" >
            <ListItemText
              primary="Bitcoin"
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: 24,
                marginX: 2,
              }}
              secondary="BTC"
            />
          </List>
      );
}