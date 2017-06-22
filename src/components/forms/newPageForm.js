import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUpload from '../../../src/components/ImageUpload';
import {Grid, Row, Col} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const style = {
  width: 350,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const NewPageForm = (props) => {
  return (
    <div>
      <form>
        <div className="titleWrapper">
          <h3 className="titleContainer">Add New Page</h3>
        </div>
        <div className="productContainer">
          <Row>
            <Col xs={8}>
              <Paper
                style={{
                "width": "100%",
                "margin": "20px",
                "textAlign": "center",
                "display": "inline-block"
              }}
                zDepth={2}>
                <Row>
                  <TextField
                    className="marginLeft"
                    fullWidth={true}
                    name="title"
                    floatingLabelText="Enter Page Title"
                    value={props.pages.title}
                    onChange={props.onChange}/>
                </Row>
                <Row>
                  <TextField
                    className="marginLeft"
                    fullWidth={true}
                    name="bodyHtml"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    floatingLabelText="Page body description"
                    value={props.pages.bodyHtml}
                    onChange={props.onChange}/>
                </Row>
                <br/>
                <Row>
                  <h4 className="marginLeft">Page Attributes</h4>
                </Row>
                <Row>
                  <TextField
                    className="marginLeft"
                    fullWidth={true}
                    name="author"
                    floatingLabelText="Page Author"
                    value={props.pages.author}
                    onChange={props.onChange}/>
                </Row>
                <Row>
                  <SelectField
                    className="marginLeft"
                    floatingLabelText="Template Layout"
                    value={props.pages.pageTemplate}
                    onChange={props.onChange}
                    fullWidth={true}>
                    <MenuItem value={1} primaryText="Default Template"/>
                    <MenuItem value={2} primaryText="Blank Page"/>
                    <MenuItem value={3} primaryText="Custom Full Width"/>
                    <MenuItem value={4} primaryText="Portfolio Template"/>
                  </SelectField>
                </Row>
              </Paper>
            </Col>
            <Col xs={3}>
              <Paper style={style} zDepth={2}>
                <Row>
                  <h4 className="marginLeft">Product Image</h4>
                </Row>
                <Row className="marginLeft">
                  <ImageUpload name="file" onChange={props.onChange}/>
                </Row>
                <br/>
                <div className="greyBackground">
                  <Row className="marginLeft">
                    Published on: Jun 21, 2014
                  </Row>
                  <Row className="marginLeft">
                    <FlatButton label="Clear Product"/>
                    <RaisedButton
                      type="submit"
                      label="Publish"
                      primary={true}
                      onClick={props.onSave}/>
                  </Row>
                </div>
              </Paper>
            </Col>
          </Row>

        </div>
      </form>

    </div>
  )
}

export default NewPageForm