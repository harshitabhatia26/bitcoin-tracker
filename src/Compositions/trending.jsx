import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import TrendingChange from './trendingChange';

export default function TrendingList() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(response => response.json())
      .then(data => {
        const top3Coins = data.coins.slice(0, 3);
        setTrendingCoins(top3Coins);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <Box sx={{ width: '100%', maxWidth: 427, bgcolor: 'background.paper', borderRadius: '8px'}}>
      <List component="nav" >
        <ListItemText
          primary="Trending Coins (24h)"
          primaryTypographyProps={{
            fontWeight: 600,
            fontSize: 24,
            marginX: 2,
          }}
        />
        {trendingCoins.map((coin, index) => (
          <ListItemButton key={index} >
            <div className='flex flex-row items-center'>
            <Avatar alt={coin.item.name} src={coin.item.thumb} sx={{ width: '24px', height: '24px',}} />
            <ListItemText primary={`${coin.item.name} (${coin.item.symbol.toUpperCase()})`} sx={{marginX: 2}} />
            <TrendingChange className="flex flex-row" id={coin.item.data.price_change_percentage_24h.usd} />
            </div>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
