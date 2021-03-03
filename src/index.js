import React from 'react'
import ReactDOM from 'react-dom'
import Tooltip from './Tooltip'
import './style.css'


const data = [
    {
        id: 1,
        name: "Island",
        by: "Zane",
        image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
        mainAttack: "tentacles",
        specialAttack: "mind reading"
    }, {
        id: 2,
        name: "Forest",
        by: "Lauren",
        image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
        mainAttack: "claws",
        specialAttack: "sneezing"
    }, {
        id: 3,
        name: "Whale",
        by: "Phil",
        image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
        mainAttack: "brain washing",
        specialAttack: "drowing"
    }, {
        id: 4,
        name: "Mountain",
        by: "Casey",
        image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
        mainAttack: "anxiety",
        specialAttack: "mind reading"
    }, {
        id: 5,
        name: "Boat",
        by: "Katie",
        image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
        mainAttack: "barbed tail",
        specialAttack: "lightning strike"
    }, {
        id: 6,
        name: "Flowers",
        by: "Korleki",
        image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
        mainAttack: "venom",
        specialAttack: "more venom"
    }, {
        id: 7,
        name: "Fire",
        by: "Eleanor",
        image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf",
        mainAttack: "eating whole",
        specialAttack: "tongue slinging"
    }, {
        id: 8,
        name: "Garden",
        by: "Jordan",
        image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
        mainAttack: "parasitic",
        specialAttack: "poison"
    }, {
        id: 9,
        name: "Bridge",
        by: "Marlon",
        image: "https://images.unsplash.com/photo-1445723356089-6dbb51d9c4f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=6e476c6e7ce1adac161295616d1bec05",
        mainAttack: "lakjsdfa",
        specialAttack: "asdf aesf"
    } ];

function App() {
    return (
            <Tiles data={data} />
        );
}

function Tiles(){

    return (
        <div className="tiles">
            {data.map((data) => {
                return <Tile data={data} key={data.id} />
            })}
        </div>
    );

}

// class Tiles extends React.Component {
//     render() {
//         // Create tile for each item in data array
//         // Pass data to each tile and assign a key
//         return (
//             <div className="tiles">
//                 {this.props.data.map((data) => {
//                     return <Tile data={data} key={data.id} />
//                 })}
//             </div>
//         );
//     }
// }

function Tile({data}){
    // const [open, setOpen] = React.useState(false)
    // const [mouseOver, setMouseOver] = React.useState(false)

    // const mouseEnter = (event) =>{
    //     event.preventDefault()
    //
    //     if (mouseOver === false) {
    //         // console.log(this.props.data.name);
    //         setMouseOver(true)
    //     }
    // }
    //
    // const mouseLeave = (event) =>{
    //     event.preventDefault()
    //
    //     if (mouseOver === true) {
    //         // console.log(this.props.data.name);
    //         setMouseOver(false)
    //     }
    // }

    // const clickHandler = (event) => {
    //     event.preventDefault();
    //
    //     if (open === false) {
    //         setOpen(true)
    //     } else {
    //         setOpen(false)
    //     }
    //
    // }
    let tileStyle = {
                width: '20vw',
                height: '30vw',
    //     [`:hover`] : {
    //         backgroundColor: "rgba(0,0,0,.5)"
    //     }
            };
    // let headerStyle = {};
    // let zoom = {};
    // // When tile clicked
    // if (open==true) {
    //     tileStyle = {
    //         width: '62vw',
    //         height: '62vw',
    //         position: 'absolute',
    //         top: '50%',
    //         left: '50%',
    //         margin: '0',
    //         marginTop: '-31vw',
    //         marginLeft: '-31vw',
    //         boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
    //         transform: 'none'
    //     };
    // } else {
    //     tileStyle = {
    //         width: '18vw',
    //         height: '18vw'
    //     };
    // }

    const texttodisplay = {name: data.name, creator: data.by, attack: data.mainAttack, sattack: data.specialAttack}

    return (
        <div className="tile">
            <Tooltip text={texttodisplay}>
                <img
                    // onMouseEnter={mouseEnter}
                    // onMouseLeave={mouseLeave}
                    // onClick={clickHandler}
                    src={data.image}
                    alt={data.name}
                    style={tileStyle}
                />
            </Tooltip>
        </div>
    );

}


// class Tile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false,
//             mouseOver: false
//         };
//         // Bind properties to class instance
//         this._clickHandler = this._clickHandler.bind(this);
//         this._mouseEnter = this._mouseEnter.bind(this);
//         this._mouseLeave = this._mouseLeave.bind(this);
//     }
//     // Event handlers to modify state values
//     _mouseEnter(e) {
//         e.preventDefault();
//         if (this.state.mouseOver === false) {
//             console.log(this.props.data.name);
//             this.setState({
//                 mouseOver: true
//             })
//         }
//     }
//     _mouseLeave(e) {
//         e.preventDefault();
//         if (this.state.mouseOver === true) {
//             this.setState({
//                 mouseOver: false
//             })
//         }
//     }
//     _clickHandler(e) {
//         e.preventDefault();
//         if (this.state.open === false) {
//             this.setState({
//                 open: true
//             });
//         } else {
//             this.setState({
//                 open: false
//             });
//         }
//     }
//
//     render() {
//         // Modify styles based on state values
//         let tileStyle = {};
//         let headerStyle = {};
//         let zoom = {};
//         // When tile clicked
//         if (this.state.open) {
//             tileStyle = {
//                 width: '62vw',
//                 height: '62vw',
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 margin: '0',
//                 marginTop: '-31vw',
//                 marginLeft: '-31vw',
//                 boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
//                 transform: 'none'
//             };
//         } else {
//             tileStyle = {
//                 width: '18vw',
//                 height: '18vw'
//             };
//         }
//
//         return (
//             <div className="tile">
//                 <Tooltip text={this.props.data.name}>
//                     <img
//                         onMouseEnter={this._mouseEnter}
//                         onMouseLeave={this._mouseLeave}
//                         onClick={this._clickHandler}
//                         src={this.props.data.image}
//                         alt={this.props.data.name}
//                         style={tileStyle}
//                     />
//                 </Tooltip>
//             </div>
//         );
//     }
// }

ReactDOM.render(
    <App data={data}/>,
    document.getElementById('app')
)