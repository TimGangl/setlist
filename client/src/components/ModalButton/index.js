import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Song from "../Song";
import API from "../../utils/API";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modalButton.css";



function ModalButton(props) {
  //states
  // const [songState, setSongState] = useState(props)
  // const [isOpen, setIsOpen] = useState(false);
  // const [songs, setSongs] = useState([{}]);
  // const [addedSongs, setAddedSongs] = useState([{}])
  //effects
  // useEffect(() => {
  //   getSongs();
  // })
  //just get the id of the song from the button press.  then get the song from the database.  Use value={value}
  // const showModal = (e) => {
  //   e.preventDefault();
  //   setIsOpen(true);
  // };

  // const hideModal = () => {
  //   setIsOpen(false);
  // };

  // const getSongs = () => {
  //   API.getSongs()
  //     .then(response => {
  //       // console.log("API")
  //       let songs = response.data;
  //       // console.log(songs)
  //       setSongs(songs)
  //     });
  // }

  // const handleAddButtonClick = (e) => {
  //   e.preventDefault();
  //   setAddedSongs(...addedSongs, {
  //     title: e.target.title,
  //     artist: e.target.artist,
  //     genre: e.trget.genre,
  //     bpm: e.target.bpm
  //   })

  // }



  return (
    // <> <h6>Click to add songs before saving<button className=" btn btn-success float-right" onClick={showModal}>Add Songs</button></h6>

    //   <Modal size="lg" show={isOpen} onHide={hideModal}>
    //     <Modal.Header>
    //       <Modal.Title>Add Songs</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body className="justify-content-center">
    //       <Table>
    //         <thead>
    //           <tr>
    //             <th>Title</th>
    //             <th>Artist</th>
    //             <th>Genre</th>
    //             <th>BPM</th>
    //             <th>Add to list</th>
    //           </tr>
    //         </thead>
    //         <tbody>

    //           {/* {
    //             songs.map((song) => {
    //               return <tr> */}
    //           <Song
    //           // key={props._id}
    //           // title={props.title}
    //           // artist={props.artist}
    //           // genre={props.genre}
    //           // bpm={props.bpm}
    //           // keySig={props.keySig}
    //           />
    //           {/* <td><Button key={"button"} target={"<tr>"} onClick={handleAddButtonClick}>+</Button></td> */}
    //           {/* </tr>
    //             }) */}
    //           }
    //         </tbody>
    //       </Table>
    //       <Song
    //         key={props.key}
    //         title={props.title}
    //         artist={props.artist}
    //         genre={props.genre}
    //         keySig={props.keySig}
    //         bpm={props.bpm} />
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <button className=" btn btn-success" onClick={hideModal}>Cancel</button>
    //       <button className="save btn btn-success">Save</button>
    //     </Modal.Footer>
    // //   </Modal>
    // </>

  );

}

export default ModalButton;