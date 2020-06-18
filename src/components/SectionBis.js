// comment dupliquer un component avec fonction.map en react
// (ma question) site:codesandbox.io
// codinggame
updateSearch(){
    console.log('yo')
 }

 render(){
     return(
         <section className='section'>
            <div>
                <ul>
                 {this.props.section.map((section)=>{
                     return<Section section={section}
                     key={section.id}/>
                 })}
                </ul>
                <input type="text" value={this.state.search} onChange={this.update.Search}/>
             </div>                                       
             <article className="article"></article>
         </section>
     )
 }      
}