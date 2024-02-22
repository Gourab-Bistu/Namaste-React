/*
<div>
    <div class="parent">
        <div class ="child">
            <h1 class="heading">This is h1</h1>
            <h2>This is h2</h2>
        </div>
    </div> 
</div>
 
*/

const parent = React.createElement('div',
{id:"parent"},
React.createElement('div',{id:"child"},
    [React.createElement('h1',{id:"heading"},"Namaste Bhai"),React.createElement('h2',{id:"heading"},"Namaste Bhai h2")])
)


// const heading = React.createElement('h1',{id:"heading"},"Hello World form React")
// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(typeof parent)
console.log(parent)