import React from 'react'
import { Table,Image  } from 'react-bootstrap';
import { data } from '../../data/Head'
import { Desc } from '../../data/Desc'
function ExelReader() {
    return (
        <div>
            <h3>Head</h3>
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
            <h3>Desc</h3>
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
            <h1>Let's have a more graphical representation of the data</h1>
            <Image        src="data\Assests\transactiondataset.png"        rounded     />
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Outlier_fraction</th>
                        <th>Fraud Cases</th>
                        <th>Valid Cases</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>0.0016529506928325245</th>
                        <th>47</th>
                        <th>28434</th>
                    </tr>
                </tbody>
            </Table>
            <h3>How different are the amount of money used in different transaction classes</h3>
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

            <Image        src="data\Assests\amountpertransaction.png"        fluid     />
            <br/>
            <h1>Graphical representation of the data</h1>
            <Image        src="data\Assests\timeoftransaction.png"        rounded     />
            <br/>
            <h4>The above correlation matrix shows that none of the V1 to V28 PCA components have any correlation to each other however if we observe Class has some form positive and negative correlations with the V components but has no correlation with Time and Amount.</h4>
            <Image        src="data\Assests\correctionMatrix.png"        rounded     />

            <h3>Random forest model details</h3>
 

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Isolation Forest</th>
                        <th>69</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>Accuracy Score</th>
                        <th>0.9975773322565921</th>
                </tr>
                <tr>
                        <td colSpan={2}>Classification Report :</td>
                    </tr>
                    <tr>
                        <th> </th>
                        <th>precision    </th>
                        <th>recall      </th>
                        <th>f1-score     </th>
                        <th>support    </th>
                </tr>
                    <tr>
                        <th>0 </th>
                        <th>1.00    </th>
                        <th>1.00       </th>
                        <th> 1.00     </th>
                        <th>28434    </th>
                </tr>
                    <tr>
                        <th>1 </th>
                        <th>0.27     </th>
                        <th>0.28      </th>
                        <th>0.27      </th>
                        <th>47    </th>
                </tr>
                    <tr>
                        <th> </th>
                        <th>precision    </th>
                        <th>recall      </th>
                        <th>f1-score     </th>
                        <th>support    </th>
                </tr>
                    <tr>
                    <th>micro avg </th>
                        <th>1.00 </th>
                        <th>1.00    </th>
                        <th>1.00      </th>
                        <th>28481    </th>
                </tr>
                    <tr>
                        <th> macro avg  </th>
                        <th>0.63          </th>
                        <th>0.64            </th>
                        <th>0.64           </th>
                        <th>28481    </th>
                </tr>
                    <tr>
                        <th>weighted avg  </th>
                        <th>1.00          </th>
                        <th>1.00            </th>
                        <th>1.00           </th>
                        <th>28481    </th>
                </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Local Outlier Factor</th>
                        <th>93</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>Accuracy Score</th>
                        <th>0.9975773322565921</th>
                </tr>
                <tr>
                        <td colSpan={2}>Classification Report :</td>
                    </tr>
                    <tr>
                        <th> </th>
                        <th>precision    </th>
                        <th>recall      </th>
                        <th>f1-score     </th>
                        <th>support    </th>
                </tr>
                    <tr>
                        <th>0 </th>
                        <th>1.00    </th>
                        <th>1.00       </th>
                        <th> 1.00     </th>
                        <th>28434    </th>
                </tr>
                    <tr>
                        <th>1 </th>
                        <th>0.27     </th>
                        <th>0.28      </th>
                        <th>0.27      </th>
                        <th>47    </th>
                </tr>
                    <tr>
                        <th> </th>
                        <th>precision    </th>
                        <th>recall      </th>
                        <th>f1-score     </th>
                        <th>support    </th>
                </tr>
                    <tr>
                    <th>micro avg </th>
                        <th>1.00 </th>
                        <th>1.00    </th>
                        <th>1.00      </th>
                        <th>28481    </th>
                </tr>
                    <tr>
                        <th> macro avg  </th>
                        <th>0.51          </th>
                        <th>0.51            </th>
                        <th>0.51           </th>
                        <th>28481    </th>
                </tr>
                    <tr>
                        <th>weighted avg  </th>
                        <th>1.00          </th>
                        <th>1.00            </th>
                        <th>1.00           </th>
                        <th>28481    </th>
                </tr>
                </tbody>
            </Table>
            
        </div>
    )
}


export default ExelReader
