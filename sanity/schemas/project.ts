const project = {
  name:'project',title:'Portfolio Project',type:'document',
  fields:[
    {name:'title',title:'Project Title',type:'string',validation:(R:any)=>R.required()},
    {name:'slug',title:'Slug',type:'slug',options:{source:'title',maxLength:96},validation:(R:any)=>R.required()},
    {name:'client',title:'Client Name',type:'string'},
    {name:'designer',title:'Designer',type:'string',initialValue:'Nate Danbury'},
    {name:'date',title:'Date',type:'string',description:'e.g. "August 2025"'},
    {name:'category',title:'Category',type:'string',options:{list:[{title:'Branding',value:'branding'},{title:'Web Development',value:'web-development'},{title:'Design',value:'design'},{title:'Programming',value:'programming'}]}},
    {name:'categoryLabel',title:'Category Display Label',type:'string',description:'e.g. "Fashion", "Event Planning"'},
    {name:'coverImage',title:'Cover Image',type:'image',options:{hotspot:true}},
    {name:'shortDescription',title:'Short Description',type:'text',rows:2},
    {name:'projectHeading',title:'Project Heading',type:'string'},
    {name:'description',title:'Full Description',type:'array',of:[{type:'block'}]},
    {name:'gallery',title:'Gallery Images',type:'array',of:[{type:'image',options:{hotspot:true},fields:[{name:'alt',type:'string',title:'Alt text'},{name:'layout',title:'Layout',type:'string',options:{list:[{title:'Horizontal',value:'horizontal'},{title:'Square',value:'square'},{title:'Vertical',value:'vertical'}]}}]}]},
    {name:'prevProject',title:'Previous Project',type:'reference',to:[{type:'project'}]},
    {name:'nextProject',title:'Next Project',type:'reference',to:[{type:'project'}]},
  ],
  preview:{select:{title:'title',subtitle:'categoryLabel',media:'coverImage'}},
}
export default project
