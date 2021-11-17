import React from "react";
import Door from "./Door";

export default class SceneManager extends React.Component {
    state = {
        currentSceneId: this.props.initialSceneId,
        width: 0,
        height: 0
    };

    componentDidMount() {
        setTimeout(() => {
            const imge = document.getElementsByClassName("view")[0];
            this.setState({ width: (imge.offsetWidth + "px"), height: (imge.offsetHeight + "px") })
        }, 500);
    }

    getCurrentSence = (id) => {
        return this.getSceneById(this.state.currentSceneId);
    }

    getSceneById = sceneId => {
        return this.props.scenes.find(scene => scene.id === sceneId);
    };

    handleDoorClick = sceneToGo => {
        this.setState({ currentSceneId: sceneToGo.id });
    };

    renderDoors = (doors = []) => {
        return doors.map((door, i) => {
            const sceneToGo = this.getSceneById(door.goto);

            return (
                <Door
                    key={i}
                    onClick={this.handleDoorClick.bind(this, sceneToGo)}
                    title={sceneToGo.title}
                    location={door.location}
                />
            );
        });
    };

    scrollLeft = () => {
        const conent = document.querySelector('.container');
        conent.scrollLeft += 300;
    }

    scrollRight = () => {
        const conent = document.querySelector('.container');
        conent.scrollLeft -= 300
    }

    render() {
        const sence = this.getCurrentSence(this.state.currentSceneId);
        return (
            <div>
                <div className="container">
                    <img className="view" id="" src={sence.image} alt="Workplace"></img>
                    <div className="no-view" style={{ width: this.state.width, height: this.state.height }}>
                        {this.renderDoors(sence.hitzones)}
                    </div>
                </div>
                <button id="slideRight" onClick={this.scrollRight}>To Left</button>
                <button id="slideLeft" onClick={this.scrollLeft}>To Right</button>
            </div>
        );
    }
}

