import MainContext from '../../../index';
import * as React from 'react';
import { updateGdpa } from '../../../redux/reducers/ui/createcv/gdpa/actions'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { connect } from "react-redux";
import { debounceTime } from '../../../utilities/variables'
import debounce from '../../../utilities/debounce'
import * as UI from '../../../utilities/ui'

import {
    Icon,
    InputIcon,
    Button,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    Tooltip,
    Textarea,
    CardEmpty
} from '@salesforce/design-system-react';
export class GDPA extends React.Component {

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateGdpa = (gdpa) => {
        this.props.updateGdpa(gdpa)
        this.updatePreview()
    }
    render() {
        return (
            <Card
                heading={this.props.header}

                icon={<Icon category="standard" name="note" size="small" />}
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">
                        <Textarea

                            label='Description'
                            value={this.props.gdpa}
                            onChange={e => this.updateGdpa(e.target.value)}
                        />
                    </div>
                </div>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return state.gdpa
}

export default connect(
    mapStateToProps,
    { updateGdpa, updatePreview },
    null,
    { context: MainContext }
)(GDPA);