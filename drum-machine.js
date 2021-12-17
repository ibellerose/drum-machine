//import audio from 'https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3';

//constants
const Display = (props) =>{
    return(
        <div id="display">

        </div>
    );
};


//classes
class Buttons extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {drumName: ""};
    }

    playAudio = (id) => {
        var audio = document.getElementById(id);
        
        if(audio.paused){
            audio.play();
        }
        else{
            audio.currentTime = 0;
        }

        switch (id) {
            case 'Q': 
                this.setState({drumName: 'Tribal Drum'});
                break;
            case 'W':
                this.setState({drumName: 'Losing Drum'});
                break;
            case 'E':
                this.setState({drumName: 'Percussion Drum'});
                break;
            case 'A':
                this.setState({drumName: 'Drum Roll'});
                break;
            case 'S':
                this.setState({drumName: 'Hand Drum'});
                break;
            case 'D':
                this.setState({drumName: 'Joke Drum'});
                break;
            case 'Z':
                this.setState({drumName: 'Bass Drum'});
                break;
            case 'X':
                this.setState({drumName: 'Short Bass Drum'});
                break;
            case 'C':
                this.setState({drumName: 'Futuristic Drum'});
                break;
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeypress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeypress);
    }

    
    handleKeypress = e => {
        var key = e.key;

        if(key == 'q' || key == 'Q'){
            this.playAudio('Q');
        }
        else if(key == 'w' || key == 'W'){
            this.playAudio('W');
        }
        else if(key == 'e' || key == 'E'){
            this.playAudio('E');
        }
        else if(key == 'a' || key == 'A'){
            this.playAudio('A');
        }
        else if(key == 's' || key == 'S'){
            this.playAudio('S');
        }
        else if(key == 'd' || key == 'D'){
            this.playAudio('D');
        }
        else if(key == 'z'  || key == 'Z'){
            this.playAudio('Z');
        }
        else if(key == 'x' || key == 'X'){
            this.playAudio('X');
        }
        else if(key == 'c' || key == 'C'){
            this.playAudio('C');
        }

    }

    render(){
        return(
            <div onKeyDown={this.handleKeypress}>
                <div class="button-wrapper">
                <button class="drum-pad"  onClick={()=>this.playAudio('Q')}>Q
                    <audio class="clip" id="Q" src="https://assets.mixkit.co/sfx/preview/mixkit-tribal-dry-drum-558.mp3"></audio>
                </button>

                <button class="drum-pad"  onClick={()=>this.playAudio('W')}>W
                    <audio src="https://assets.mixkit.co/sfx/preview/mixkit-losing-drums-2023.mp3" class="clip" id="W"></audio>
                </button>

                <button class="drum-pad" onClick={()=>this.playAudio('E')}>E
                    <audio src="https://assets.mixkit.co/sfx/preview/mixkit-drum-and-percussion-545.mp3" class="clip" id="E"></audio>
                </button>

                <button class="drum-pad" onClick={()=>this.playAudio('A')}>A
                    <audio src="https://assets.mixkit.co/sfx/preview/mixkit-toy-drums-and-bell-ding-560.mp3" class="clip" id="A"></audio>
                </button>

                <button class="drum-pad" onClick={()=>this.playAudio('S')}>S
                    <audio src="https://assets.mixkit.co/sfx/preview/mixkit-hand-tribal-drum-562.mp3" class="clip" id="S"></audio>
                </button>

                <button class="drum-pad" onClick={()=>this.playAudio('D')}>D
                    <audio src="https://assets.mixkit.co/sfx/preview/mixkit-bad-joke-drums-2893.mp3" class="clip" id="D"></audio>
                </button>

                <button class="drum-pad" onClick={()=>this.playAudio('Z')}>Z
                    <audio src="https://assets.mixkit.co/sfx/preview/mixkit-blockbuster-trailer-bass-drum-553.mp3" class="clip" id="Z"></audio>
                </button>

                <button class="drum-pad" onClick={()=>this.playAudio('X')}>X
                    <audio src="https://assets.mixkit.co/sfx/preview/mixkit-short-bass-hit-2299.mp3" class="clip" id="X"></audio>
                </button>

                <button class="drum-pad" onClick={()=>this.playAudio('C')}>C
                    <audio src="https://assets.mixkit.co/sfx/preview/mixkit-futuristic-bass-hit-2303.mp3" class="clip" id="C"></audio>
                </button>
            </div>
                
                <h1 id="text">{this.state.drumName}</h1>

        </div>
        )
    }

}


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