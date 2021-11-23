//import audio from 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3';

//constants
const Display = (props) =>{
    return(
        <div id="display">

        </div>
    );
};


class Buttons extends React.Component{
    constructor(props){
        super(props);
    }

    playAudio = (id) => {
        var audio = document.getElementById(id);
        if(audio.paused){
            audio.play();
        }
        else{
            audio.currentTime = 0;
        }
    }

    render(){
        return(
            <div class="button-wrapper">
            <button class="drum-pad" onClick={()=>this.playAudio('Q')}>Q
                <audio class="clip" id="Q" src="https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3"></audio>
            </button>

            <button class="drum-pad" onClick={()=>this.playAudio('W')}>W
                <audio src="losing-drums.wav" class="clip" id="W"></audio>
            </button>

            <button class="drum-pad" onClick={()=>this.playAudio('E')}>E
                <audio src="drum-and-percussion.wav" class="clip" id="E"></audio>
            </button>

            <button class="drum-pad" onClick={()=>this.playAudio('A')}>A
                <audio src="toy-drums-and-bell-ding.wav" class="clip" id="A"></audio>
            </button>

            <button class="drum-pad" onClick={()=>this.playAudio('S')}>S
                <audio src="hand-tribal-drum.wav" class="clip" id="S"></audio>
            </button>

            <button class="drum-pad" onClick={()=>this.playAudio('D')}>D
                <audio src="joke-drums.wav" class="clip" id="D"></audio>
            </button>

            <button class="drum-pad" onClick={()=>this.playAudio('Z')}>Z
                <audio src="drum-bass-hit.wav" class="clip" id="Z"></audio>
            </button>

            <button class="drum-pad" onClick={()=>this.playAudio('X')}>X
                <audio src="short-bass-hit.wav" class="clip" id="X"></audio>
            </button>

            <button class="drum-pad" onClick={()=>this.playAudio('C')}>C
                <audio src="futuristic-bass-hit.wav" class="clip" id="C"></audio>
            </button>
        </div>
        )
    }

}

//functions
/*
function = playAudio => () {
    new Audio(audio).play();
    //document.getElementById('q').play();
}
*/

class DrumMachine extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div id="machine">
                <Display />
                <Buttons />

            </div>
        )
    }
}

ReactDOM.render(
    <DrumMachine />,
    document.getElementById('drum-machine')
);