// let hrdtable = {"colorindex.png"}

function HRDiagram(){

return (

<div className="HRDiagram">
<p><a href="https://commons.wikimedia.org/wiki/File:HR-diag-instability-strip.svg">Rursus</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, via Wikimedia Commons</p>
<img className="hrd" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/HR-diag-instability-strip.svg" alt="Hertzsprung-Russel Diagram"></img>

<div><img className="hrd" src={require("./colorindex.png")} alt="Color Index Diagram, info taken from ISBN 0-521-34787-4, Diagram From Wikipedia Commons, the url is https://en.wikipedia.org/wiki/Color_index"></img></div>

</div>
)

}




export default HRDiagram
