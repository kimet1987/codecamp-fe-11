import ReactPlayer from "react-player";

const Video = ({ playList, index }: any) => {
    return (
        <>
            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    url={"https://www.youtube.com/watch?v=i1HPaGDnocM"}
                    width="800px"
                    height="600px"
                    playing={true}
                    muted={true}
                    controls={true}
                    light={false}
                />
            </div>
        </>
    );
};

export default Video;
