# Discord Drop Alert Bot

A Discord bot for monitoring product drops and releases.

## Features
- Real-time drop alerts
- Premium dual-channel system
- Release calendar integration
- FAQ system with interactive menus
- Discord Server Subscriptions integration

## Architecture
- **Bot Package**: Main Discord bot with slash commands
- **Monitors Package**: Background workers for scraping and monitoring
- **Admin Package**: Web dashboard for management

## Deployment
This bot is designed to be deployed on Railway or similar cloud platforms.

## Environment Variables
- `DISCORD_TOKEN`: Your Discord bot token
- `CLIENT_ID`: Your Discord application client ID
- `GUILD_ID`: Your Discord server ID
- `NODE_ENV`: Set to 'production' for deployment

## Getting Started
1. Deploy to Railway
2. Set environment variables
3. Invite bot to your Discord server
4. Run `/setup` command to initialize
