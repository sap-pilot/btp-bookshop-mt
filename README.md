# Getting Started

Welcome to BTP multi-tenant sample project

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Deployment Steps

1. Login to your CF space: `cf login`
1. Build and deploy this project: `npm run bd`
1. Open your consumer sub-account cockpit, goto Market Place and subscribe 'btpshopmt' app
1. In your consumer sub-account, goto Services, select btpshopmt then 'Open Application' 
1. Note the route to the application might be not available yet, in this case:
   - Open your provider sub-account cockpit then enter space, add the missing route then bind it to btpshopmt-app
   - Refresh the "route not found" tab, you should see the app now
1. Open "Bookshop" tile to test the app

## Learn More

Learn more at https://cap.cloud.sap/docs/guides/multitenancy/
