<template>
    <div>
        <div class="tradingview-widget-container" style="width: 800px; height: 100px; margin:auto">
            <div class="tradingview-widget-container__widget" id="tradingview_realtime"></div>
        </div>
        <div class="tradingview-widget-container" style="width: 800px; height: 500px; margin:auto">
            <div id="tradingview_chart"></div>
        </div>
        </div>
    </template>
    
    <script>
        /* global TradingView */ // Esto le dice a ESLint que TradingView es una variable global
    
    export default {
        name: 'TradingViewWidgets',
        mounted() {
        const scriptRealtime = document.createElement('script');
        scriptRealtime.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
        scriptRealtime.async = true;
        scriptRealtime.innerHTML = JSON.stringify({
            "symbol": "OANDA:XAUUSD",
            "width": "800",
            "height": "100",
            "colorTheme": "dark",
            "isTransparent": false,
            "locale": "en",
            "center": "true"
        });
        document.getElementById('tradingview_realtime').appendChild(scriptRealtime);
    
        const scriptChart = document.createElement('script');
        scriptChart.src = 'https://s3.tradingview.com/tv.js';
        scriptChart.async = true;
        document.getElementById('tradingview_chart').appendChild(scriptChart);
        scriptChart.onload = () => {
            new TradingView.widget({
            "autosize": false,
            "symbol": "OANDA:XAUUSD",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "es",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": true,
            "hide_side_toolbar": true,
            "allow_symbol_change": false,
            "show_popup_button": false,
            "popup_width": "1000",
            "popup_height": "650",
            "container_id": "tradingview_chart",
            "width": "800",
            "center": "true",
            "height": "500"
            });
        };
        }
    }
    </script>
    