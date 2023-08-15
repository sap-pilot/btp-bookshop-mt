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


## Deployment Steps (to provider sub-account)

1. Login to your CF space: `cf login`
1. Build and deploy this project: `npm run bd`
1. After deployment, Navigate to your provider sub-account BTP cockipt -> Destination, open **BTP-Bookshop-MT-cfapi**, edit following fields
   - **Token Service URL**: Change from **login**.cf.us10 to **uaa**.cf.us10
   - **User**: Your admin user id in provider sub-account (for calling CF api to create tenant routes)
   - **Password**: Your admin user password
   - **Client Secret**: Enter any dummy password (so we can save the change)
1. After saving the destination change, edit again and clear **Client Secret** (leave it empty) then save destinations again. 
1. Your multi-tenant app in provider sub-account is ready. Proceed with below subscription steps. 

## Subscription Steps (in consumer sub-account)

1. Open your consumer sub-account cockpit, goto **Market Place** and subscribe **BTP-Bookshop-MT** app
1. (Optional) Create role colleciton for role **BTP-Bookshop-MT-${space}.admin** then assign to test user for testing Admin app 
1. In your consumer sub-account, goto **Services**, select **BTP-Bookshop-MT** then **Open Application** 
1. Open **Bookshop** tile to test the app


## Adoption Steps

To adopt this sample for your MTE solution, execute below steps:

1. In **mta.yaml** 
    - Replace **BTP-Bookshop-MT** with your solution name 
    - Replace **bshop** with a short name for your solution, for instance bpmaintain (must be unique across all MTE solutions)
1. In **mtx/sidecar/server.js**
    - Replace **BTP-Bookshop-MT** and **bshop** with above names in mtx/sidecar/server.js (must be consistent with mta.yaml)
1. In package.json, app/package.json, mtx/sidecar/package.json
    - Replace **BTP-Bookshop-MT** with your solution name 

## Learn More

Learn more at https://cap.cloud.sap/docs/guides/multitenancy/
