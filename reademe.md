#running the app
npm run build && pm2 kill && pm2 start npm --name "next" -- start