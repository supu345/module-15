import React, { useEffect, useState } from "react";
import { deleteOrderRequest, listOrderRequest } from "../apiRequest/apiRequest";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

const OrderList = () => {
  let [data, setData] = useState([]);
  let [change, setChange] = useState(0);

  useEffect(() => {
    (async () => {
      let res = await listOrderRequest();
      setData(res);
    })();
  }, [change]);

  const onDelete = async (id) => {
    let res = await deleteOrderRequest(id);
    if (res) {
      toast.success("Delete completed");
      setChange(new Date().getTime());
    } else {
      toast.error("Delete fail");
    }
  };

  if (data?.length === 0) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  } else {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="mt-5 shadow-sm">
              <Table responsive="sm">
                <thead className="text-center">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Date Of Birth</th>
                    <th>Nationality</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Admission Date</th>
                    <th>Courses</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item["firstName"]}</td>
                        <td>{item["lastName"]}</td>
                        <td>{item["gender"]}</td>
                        <td>{item["dateOfBirth"]}</td>
                        <td>{item["nationality"]}</td>
                        <td>{item["address"]}</td>
                        <td>{item["email"]}</td>
                        <td>{item["phone"]}</td>
                        <td>{item["admissionDate"]}</td>
                        <td>{item["courses"]}</td>
                        <td>
                          <button
                            onClick={() => {
                              onDelete(item["_id"]);
                            }}
                            className="btn btn-danger p-2 mb-2"
                          >
                            Delete
                          </button>
                          <Link
                            className="btn mx-2 btn-success"
                            to={"/registration?id=" + item["_id"]}
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Toaster position="bottom-center" />
      </Container>
    );
  }
};

export default OrderList;
