const post = {
  name:'post',title:'Blog Post',type:'document',
  fields:[
    {name:'title',title:'Title',type:'string',validation:(R:any)=>R.required()},
    {name:'slug',title:'Slug',type:'slug',options:{source:'title',maxLength:96},validation:(R:any)=>R.required()},
    {name:'author',title:'Author',type:'string',initialValue:'Nate Danbury'},
    {name:'coverImage',title:'Cover Image',type:'image',options:{hotspot:true}},
    {name:'publishedAt',title:'Published At',type:'datetime'},
    {name:'category',title:'Category',type:'string',options:{list:['Branding','Web','Product','Process','Design Career','Case Study'].map(v=>({title:v,value:v}))}},
    {name:'readTime',title:'Read Time',type:'string'},
    {name:'excerpt',title:'Excerpt',type:'text',rows:3},
    {name:'body',title:'Body',type:'array',of:[{type:'block'},{type:'image',options:{hotspot:true},fields:[{name:'alt',type:'string',title:'Alt text'}]}]},
  ],
  preview:{select:{title:'title',subtitle:'category',media:'coverImage'}},
}
export default post
