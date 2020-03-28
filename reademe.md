#running the app
npm run build && pm2 kill && pm2 start npm --name "next" -- start

#image url variable 
${publicRuntimeConfig.imageUrl}

#Components
<CallEmail /> for call and email buttons on property

<PageSearch placeholder="Property Inspections" /> For page search

<PageTitle title="Property Inspections" /> For Page Title With Back

<Modal id="MODAL-ID">    
    <div className="content">                   
    </div>
 </Modal>

<ListItem rowOne="January 12, 2020" href="/" /> For List Item

<ListItem rowOne="January 12, 2020" rowTwo="second row" href="/" /> For Two Row list item

<TileLink href="/" src="properties" text="Unit Inspections" /> src is for image text is for link text