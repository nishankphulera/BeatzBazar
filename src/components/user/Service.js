import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navigationbar from "../common/Navigationbar";
import SearchBar from "./SearchBar";
const Service = () => {
  const ServiceBox = (props) => {
    const [show, setShow] = useState(false);
    return (
      <div
        onClick={() => {
          setShow(true);
        }}
        style={{
          display: "flex",
          height: 200,
          width: 200,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "1px 4px 11px grey",
          margin: 30,
          flexWrap: "wrap",
          backgroundColor: "white",
        }}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Modal
            show={show}
            onHide={() => {
              setShow(false);
            }}
          >
            <Modal.Header>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Query</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setShow(false);
                }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setShow(false);
                }}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <img
          style={{ height: 40, width: 40, marginBottom: 20 }}
          src={props.image}
        ></img>
        <text
          style={{
            width: 100,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {props.title}
        </text>
      </div>
    );
  };
  return (
    <div
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", backgroundColor: "#1B1C1D" }}>
        <img
          style={{ height: 100, width: 200 }}
          src={require("../../assets/beatzbazar.png")}
        ></img>
        <SearchBar></SearchBar>
      </div>
      <Navigationbar></Navigationbar>
      <div
        onClick={() => {}}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          height: "100%",
          marginTop: 40,
        }}
      >
        <ServiceBox
          title="One on one session"
          image={require("../../assets/meeting.png")}
        ></ServiceBox>
        <ServiceBox
          title="Custom Beats"
          image={require("../../assets/meeting.png")}
        ></ServiceBox>
        <ServiceBox
          title="Mix and Mastering"
          image={require("../../assets/meeting.png")}
        ></ServiceBox>
        <ServiceBox
          title="Sample and Sounds"
          image={require("../../assets/meeting.png")}
        ></ServiceBox>
      </div>
    </div>
  );
};

export default Service;
