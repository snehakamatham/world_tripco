import React, { Component, createRef } from 'react';
import { Button, Divider, Grid, Radio, TextField, Typography, withStyles } from '@material-ui/core'
import WorldStyles from './WorldStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const travelstyle = {
    backgroundColor: '#e9f1fc',
    borderColor: '#0066cc'
}
const travelstyle2 = {
    backgroundColor: 'transparent',
    borderColor: '#e1e7ee'
}

class WorldTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            radiocheck: false,
            traveldialog: false,
            traveldialogref: React.createRef(),
            travelclass: '',
            adultcounter: 1,
            childcounter: 0,
            infantcounter: 0,
            anew: '',
            cnew: '',
            inew: '',
            trav:''
        }
    }

    checkIfClickedOutside = (e) => {
        let { traveldialog, traveldialogref } = this.state
        if (traveldialog && traveldialogref.current && !traveldialogref.current.contains(e.target)) {
            this.setState({
                traveldialog: false
            })
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", this.checkIfClickedOutside)
        }
    }

    handleradio = () => {
        this.setState({
            radiocheck: true
        })
    }

    handletravellerClick = () => {
        this.setState({
            traveldialog: true
        })
    }

    settravelclass = (e, param) => {
        this.setState({
            travelclass: param
        })
    }

    adultincrement = () => {
        let { adultcounter } = this.state;


        let adultcount = adultcounter + 1
        this.setState({
            adultcounter: adultcount,
        })

        console.log(adultcounter, "adultcounter>8adultcounter>8")
        if (adultcounter >= 8) {
            this.setState({
                childcounter: 1
            })
        }
    }
    adultdecrement = () => {
        let { adultcounter } = this.state
        let count = adultcounter - 1;
        if (adultcounter <= 1) {
            this.setState({
                adultcounter: 1,
            })
        } else {
            this.setState({
                adultcounter: count,
            })
        }

    }

    childincrement = () => {
        let { childcounter } = this.state

        let count = childcounter + 1
        this.setState({
            childcounter: count
        })
    }
    childdecrement = () => {
        let { childcounter } = this.state
        let count = childcounter - 1
        if (childcounter <= 1) {
            this.setState({
                childcounter: 0,
            })
        } else {
            this.setState({
                childcounter: count,
            })
        }
    }

    infantincrement = (e) => {
        let { infantcounter } = this.state
        let count = infantcounter + 1
        this.setState({
            infantcounter: count
        })
    }
    infantdecrement = () => {
        let { infantcounter } = this.state
        let count = infantcounter - 1
        if (infantcounter <= 1) {
            this.setState({
                infantcounter: 0,
            })
        } else {
            this.setState({
                infantcounter: count,
            })
        }
    }

    handleSubmit = () => {
        let { adultcounter, childcounter, infantcounter ,travelclass } = this.state
        this.setState({
            anew: adultcounter,
            cnew: childcounter,
            inew: infantcounter,
            trav : travelclass,
            traveldialog:false
        })
    }

    render() {
        const { classes } = this.props
        const { radiocheck, traveldialog, traveldialogref, travelclass, adultcounter, childcounter, infantcounter, anew, cnew, inew,trav } = this.state
        return <div className={classes.maindiv}>
            <br />
            <br />
            <br />
            <br />
            <Grid container justifyContent='center' >
                <Grid container item md={9} justifyContent='center'>
                    <label className={classes.heading}>Book Domestic and International Flight Tickets</label>
                </Grid>
                <Grid container item md={9} className={classes.maincard} justifyContent='flex-start'>
                    <Grid container item md={9} style={{ marginTop: '20px' }}>
                        <Grid container item md={2} alignItems='center' justifyContent='center'>
                            <span style={{ backgroundColor: radiocheck == true ? '#2276e31a' : '', borderRadius: '20px', padding: '2px 10px' }}>
                                <Radio size='small' color='primary' id="oneway" name="onewaycheck" checked={radiocheck} onClick={this.handleradio} />
                                <label variant='body2' for="oneway">One-way</label>
                            </span>
                        </Grid>
                    </Grid>
                    <Grid item md={9}></Grid>
                    <div style={{ padding: '20px', display: 'flex' }}>
                        <div className={classes.fromdiv} id="fromfield">
                            <div className={classes.fromlabel}>From</div>
                            <div className={classes.delhi}><span>Delhi</span></div>
                            <div className={classes.delhi2}>DEL, Delhi Airport </div>
                        </div>

                        <div className={classes.fromdiv} id="fromfield">
                            <div className={classes.fromlabel}>To</div>
                            <div className={classes.delhi}><span>Bengaluru</span></div>
                            <div className={classes.delhi2}>BLR, Kempegowda Airport </div>
                        </div>

                        <div className={classes.departurediv} id="fromfield">
                            <div>
                                <div className={classes.departurelabel}>Departure</div>
                                <div className={classes.delhi}>26 Jan'22</div>
                                <div className={classes.delhi2}>wednesday</div>
                            </div>
                            <div ><ExpandMoreIcon size="medium" color="primary" style={{ marginTop: '11px' }} /></div>
                        </div>

                        <div className={classes.departurediv} id="fromfield">
                            <div>
                                <div className={classes.departurelabel}>Return</div>
                                <div className={classes.returncontent}>Click to add a <br />return flight for better discounts</div>
                            </div>
                        </div>
                        <div className={classes.traveldiv} id="fromfield" onClick={this.handletravellerClick}>
                            <div className={classes.travellabel}>Traveller's & Class</div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <div>
                                    <div className={classes.delhi} style={{ display: 'flex' }}><span>{anew!=''?anew : 1}</span> Adult</div>
                                    <div className={classes.delhi2}>{trav !='' ? trav :'Economy'} </div>
                                </div>
                                <div style={{ visibility: anew!=0? 'visible' : 'hidden' }}>
                                    <div className={classes.delhi} style={{ marginLeft: '10px!important', display: 'flex' }}>,<span>{cnew}</span> Child</div>
                                    <div className={classes.delhi2}> </div>
                                </div>

                                <div style={{ visibility: inew!= 0 ? 'visible' : 'hidden' }}>
                                    <div className={classes.delhi} style={{ display: 'flex' }}>,<span>{inew}</span> Infant</div>
                                    <div className={classes.delhi2}> </div>
                                </div>
                            </div>
                        </div>


                        {traveldialog && (
                            <div ref={traveldialogref}>
                                <div className={classes.dialogdiv}>
                                    <div style={{ width: '100%', height: '500px', justifyContent: 'right' }}>
                                        <div style={{ backgroundColor: '', display: 'flex', justifyContent: 'flex-end' }}>
                                            <div className={classes.traveldiv} id="fromfield">
                                                <div className={classes.travellabel}>Traveller's & Class</div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    <div>
                                                        <div className={classes.delhi} style={{ display: 'flex' }}><span>{adultcounter >= 2 ? adultcounter : 1}</span> Adult</div>
                                                        <div className={classes.delhi2}>{travelclass != '' ? travelclass : 'Economy'} </div>
                                                    </div>
                                                    <div style={{ visibility: childcounter > 0 ? 'visible' : 'hidden' }}>
                                                        <div className={classes.delhi} style={{ marginLeft: '10px!important', display: 'flex' }}>,<span>{childcounter}</span> Child</div>
                                                        <div className={classes.delhi2}> </div>
                                                    </div>
                                                    <div style={{ visibility: infantcounter > 0 ? 'visible' : 'hidden' }}>
                                                        <div className={classes.delhi} style={{ display: 'flex' }}>,<span>{infantcounter}</span> Infant</div>
                                                        <div className={classes.delhi2}> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <Divider />
                                        <div style={{ padding: '8px 15px' }}>
                                            <Grid container>
                                                <Grid item md={4}>
                                                    <Typography style={{ color: adultcounter > 8 ? 'red' : '' }}><b>Adults</b></Typography>
                                                    <Typography variant='caption'>(Aged 12+ yrs)</Typography>
                                                    <div className={classes.adult1}>
                                                        <div onClick={(e) => { this.adultdecrement() }} style={{ backgroundColor: '', cursor: adultcounter <= 1 ? 'disabled' : 'pointer', padding: '3px 5px', alignItems: 'center' }}>
                                                            <RemoveIcon size="small" color={`${adultcounter <= 1 ? 'disabled' : 'primary'}`} />
                                                        </div>
                                                        <div style={{ alignItems: 'center', height: '100%', fontSize: '20px' }}>{adultcounter}</div>
                                                        <div onClick={(e) => { this.adultincrement() }} style={{ backgroundColor: '', cursor: 'pointer', padding: '3px 5px' }}>
                                                            <AddIcon size="small" color="primary" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <Typography style={{ color: adultcounter > 8 ? 'red' : '' }}><b>Children</b></Typography>
                                                    <Typography variant='caption'>(Aged 2-12 yrs)</Typography>
                                                    <div className={classes.adult1}>
                                                        <div onClick={() => { this.childdecrement() }}
                                                            style={{ backgroundColor: '', cursor: 'pointer', padding: '3px 5px', alignItems: 'center' }}
                                                        >
                                                            <RemoveIcon size="small" color={`${childcounter <= 1 ? 'disabled' : 'primary'}`} />
                                                        </div>
                                                        <div style={{ alignItems: 'center', height: '100%', fontSize: '20px' }}>{childcounter}</div>
                                                        <div onClick={() => { this.childincrement() }} style={{ backgroundColor: '', cursor: 'pointer', padding: '0px 5px' }}>
                                                            <AddIcon size="small" color="primary" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item md={4}>

                                                    <Typography><b>Infants</b></Typography>
                                                    <Typography variant='caption'>(Below 2 yrs)</Typography>
                                                    <div className={classes.adult1}>
                                                        <div onClick={() => { this.infantdecrement() }} style={{ backgroundColor: '', cursor: 'pointer', padding: '3px 5px', alignItems: 'center' }}>
                                                            <RemoveIcon size="small" color={`${infantcounter <= 1 ? 'disabled' : 'primary'}`} />
                                                        </div>
                                                        <div style={{ alignItems: 'center', height: '100%', fontSize: '20px' }}>1</div>
                                                        <div onClick={() => { this.infantincrement() }} style={{ backgroundColor: '', cursor: 'pointer', padding: '3px 5px' }}>
                                                            <AddIcon size="small" color="primary" />
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid item md={12} style={{ marginTop: '25px' }}>
                                                <center><b>Travel Class</b></center>
                                                <div style={{ display: 'flex', marginTop: '20px' }}>
                                                    <div className={classes.travelclass} onClick={(e) => { this.settravelclass(e, 'Economy') }}
                                                        style={travelclass == "Economy" ? travelstyle : travelstyle2}>Economy</div>
                                                    <div className={classes.travelclass} onClick={(e) => { this.settravelclass(e, 'Premium') }}
                                                        style={travelclass == "Premium" ? travelstyle : travelstyle2}>Premium Economy</div>
                                                    <div className={classes.travelclass} onClick={(e) => { this.settravelclass(e, 'Business') }}
                                                        style={travelclass == "Business" ? travelstyle : travelstyle2}>Business</div>
                                                    <div className={classes.travelclass} onClick={(e) => { this.settravelclass(e, 'First Class') }}
                                                        style={travelclass == "First Class" ? travelstyle : travelstyle2}>First Class</div>
                                                </div>
                                            </Grid>
                                        </div>
                                        <br />
                                        <Divider />
                                        {adultcounter > 8 ?
                                            <div style={{ textAlign: 'center' }}>
                                                <Typography variant='body1'>Looking to make a booking for more than 9 people?</Typography>
                                                <Typography variant='body2'>Use our group booking feature for better discounts!</Typography>
                                                <Button style={{ backgroundColor: '#ff6d38', borderRadius: '30px', padding: '5px 25px', textTransform: 'uppercase', fontWeight: '800', color: 'white', fontSize: '15px' }}>Get a Call Back</Button>
                                            </div>
                                            :
                                            <div style={{ textAlign: 'right' }}>
                                                <br />
                                                <Button style={{ textTransform: 'Capitalize' }}>Cancel</Button>&nbsp;&nbsp;
                                                <Button variant='contained'
                                                    style={{ backgroundColor: '#0066cc', color: 'white', marginRight: '20px', textTransform: 'Capitalize' }}
                                                    onClick={this.handleSubmit}>Done</Button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Grid container item md={12}>
                        <Grid item md={1}>
                            <Typography variant='caption'>Select A <br />Fare Type:</Typography>
                        </Grid>
                        <Grid item md={11}>
                            <div style={{ display: 'flex', marginTop: '10px' }}>
                                <div style={{ backgroundColor: '#e9f1fc', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', padding: '0px 10px' }}>
                                    <Radio size='small' color='primary' /><Typography variant="caption">Regular</Typography>
                                </div>
                                <div className={classes.faretype1}>
                                    <div className={classes.notification} >New</div>
                                    <Radio size='small' color='primary' /><Typography variant="caption">Armed Forces</Typography>
                                </div>
                                <div className={classes.faretype1}>
                                    <div className={classes.notification} >New</div>
                                    <Radio size='small' color='primary' /><Typography variant="caption">Senior Citizen</Typography>
                                </div>
                                <div className={classes.faretype1}>
                                    <Radio size='small' color='primary' /><Typography variant="caption">Student</Typography>
                                </div>
                                <div className={classes.faretype1}>
                                    <Radio size='small' color='primary' /><Typography variant="caption">Extra seat</Typography>
                                </div>
                            </div>
                            <div style={{ zIndex: '9999', marginTop: '30px' }}>
                                <Button style={{ backgroundColor: '#ff6d38', borderRadius: '30px', padding: '12px 35px', textTransform: 'uppercase', fontWeight: '800', color: 'white', fontSize: '20px' }}>Search Flights</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>


        </div>
    }
}

export default withStyles(WorldStyles)(WorldTrip);
