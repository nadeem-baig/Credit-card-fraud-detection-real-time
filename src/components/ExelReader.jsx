import React from 'react'
import { Table } from 'react-bootstrap';
import { data } from '../../data/Head'
import { Desc } from '../../data/Desc'
function ExelReader() {
    console.log(Desc);
    return (
        <div>
            <h1>Head</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>V1</th>
                        <th>V2</th>
                        <th>V3</th>
                        <th>V4</th>
                        <th>V5</th>
                        <th>V6</th>
                        <th>V7</th>
                        <th>V8</th>
                        <th>V9</th>
                        <th>V10</th>
                        <th>V11</th>
                        <th>V12</th>
                        <th>V13</th>
                        <th>V14</th>
                        <th>V15</th>
                        <th>V16</th>
                        <th>V17</th>
                        <th>V18</th>
                        <th>V19</th>
                        <th>V20</th>
                        <th>V21</th>
                        <th>V22</th>
                        <th>V23</th>
                        <th>V24</th>
                        <th>V25</th>
                        <th>V26</th>
                        <th>V27</th>
                        <th>V28</th>
                        <th>Amount</th>
                        <th>Class</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((source) => {
                            return <tr>
                                <td>{source.Amount}</td>
                                <td>{source.V1}</td>
                                <td>{source.V2}</td>
                                <td>{source.V3}</td>
                                <td>{source.V4}</td>
                                <td>{source.V5}</td>
                                <td>{source.V6}</td>
                                <td>{source.V7}</td>
                                <td>{source.V8}</td>
                                <td>{source.V9}</td>
                                <td>{source.V10}</td>
                                <td>{source.V11}</td>
                                <td>{source.V12}</td>
                                <td>{source.V13}</td>
                                <td>{source.V14}</td>
                                <td>{source.V15}</td>
                                <td>{source.V16}</td>
                                <td>{source.V17}</td>
                                <td>{source.V18}</td>
                                <td>{source.V19}</td>
                                <td>{source.V20}</td>
                                <td>{source.V21}</td>
                                <td>{source.V22}</td>
                                <td>{source.V23}</td>
                                <td>{source.V24}</td>
                                <td>{source.V25}</td>
                                <td>{source.V26}</td>
                                <td>{source.V27}</td>
                                <td>{source.V28}</td>
                                <td>{source.Amount}</td>
                                <td>{source.Class}</td>

                            </tr>

                        })
                    }


                </tbody>
            </Table>
            <h1>Desc</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>V1</th>
                        <th>V2</th>
                        <th>V3</th>
                        <th>V4</th>
                        <th>V5</th>
                        <th>V6</th>
                        <th>V7</th>
                        <th>V8</th>
                        <th>V9</th>
                        <th>V10</th>
                        <th>V11</th>
                        <th>V12</th>
                        <th>V13</th>
                        <th>V14</th>
                        <th>V15</th>
                        <th>V16</th>
                        <th>V17</th>
                        <th>V18</th>
                        <th>V19</th>
                        <th>V20</th>
                        <th>V21</th>
                        <th>V22</th>
                        <th>V23</th>
                        <th>V24</th>
                        <th>V25</th>
                        <th>V26</th>
                        <th>V27</th>
                        <th>V28</th>
                        <th>Amount</th>
                        <th>Class</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Desc.map((source) => {
                            return <tr>
                                <td>{source.Amount}</td>
                                <td>{source.V1}</td>
                                <td>{source.V2}</td>
                                <td>{source.V3}</td>
                                <td>{source.V4}</td>
                                <td>{source.V5}</td>
                                <td>{source.V6}</td>
                                <td>{source.V7}</td>
                                <td>{source.V8}</td>
                                <td>{source.V9}</td>
                                <td>{source.V10}</td>
                                <td>{source.V11}</td>
                                <td>{source.V12}</td>
                                <td>{source.V13}</td>
                                <td>{source.V14}</td>
                                <td>{source.V15}</td>
                                <td>{source.V16}</td>
                                <td>{source.V17}</td>
                                <td>{source.V18}</td>
                                <td>{source.V19}</td>
                                <td>{source.V20}</td>
                                <td>{source.V21}</td>
                                <td>{source.V22}</td>
                                <td>{source.V23}</td>
                                <td>{source.V24}</td>
                                <td>{source.V25}</td>
                                <td>{source.V26}</td>
                                <td>{source.V27}</td>
                                <td>{source.V28}</td>
                                <td>{source.Amount}</td>
                                <td>{source.Class}</td>

                            </tr>

                        })
                    }


                </tbody>
            </Table>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>count</th>
                        <th>Mean</th>
                        <th>std</th>
                        <th>min</th>
                        <th>25%</th>
                        <th>50%</th>
                        <th>75%</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={8}>Amount of money used in different non fraud transaction classes</td>
                    </tr>

                    <tr>
                        <th>284314.000000</th>
                        <th>88.290570</th>
                        <th>250.105416</th>
                        <th>0.000000</th>
                        <th>5.650000</th>
                        <th>22.000000</th>
                        <th>77.050000</th>
                        <th>25691.160000</th>
                    </tr>
                    <tr>
                        <td colSpan={8}>Amount of money used in different fraud transaction classes</td>
                    </tr>    <tr>
                        <th>492.000000</th>
                        <th>122.211321</th>
                        <th>256.683288</th>
                        <th>0.000000</th>
                        <th>1.000000</th>
                        <th>9.250000</th>
                        <th>105.890000</th>
                        <th>2125.870000</th>
                    </tr>

                </tbody>
            </Table>


        </div>
    )
}


export default ExelReader
