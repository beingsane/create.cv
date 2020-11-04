import * as React from 'react';
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
import { connect } from "react-redux"
import MainContext from '../../../index'
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../redux/reducers/ui/createcv/links/actions'
import "react-datepicker/dist/react-datepicker.css";
import * as Buttons from '../../../utilities/ui'
import * as UI from '../../../utilities/ui'
import DeleteItem from '../components/contentActions/DeleteItem'
import {showToast} from 'redux/reducers/ui/components/toasts/actions'


export class Links extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedPanels: {},
        }
    }
    setState = this.setState.bind(this)

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateLabel = (id, label) => {
        this.props.updateLabel(id, label)
        this.updatePreview()
    }

    updateLink = (id, link) => {
        this.props.updateLink(id, link)
        this.updatePreview()
    }

    deleteLink = id => {
        this.props.deleteLink(id)
        this.props.showToast(['Link has been deleted.'])

        this.updatePreview()
    }

    addLink = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.links.length]: true
            },
        }));
        this.props.addLink()
        this.props.showToast(['New link has been added.'], 'success')

        this.updatePreview()
    }



    render() {
        const isEmpty = this.props.links.length === 0;

        let links = []
        if (this.props.links) {
            for (let i = 0; i < this.props.links.length; i++) {
                links.push(
                    <AccordionPanel
                        panelContentActions={
                            <DeleteItem title="Delete link" item={this.props.links[i].label || 'Link ' + (i + 1)} onDelete={() => this.deleteLink(i)} context={MainContext} />
                        }
                        key={i}
                        onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
                        expanded={!!this.state.expandedPanels[i]}
                        summary={this.props.links[i].label || 'Link ' + (i + 1)}
                    >
                        <Input
                            variant="outlined"
                            label='Label'
                            value={this.props.links[i].label}
                            onChange={e => this.updateLabel(i, e.target.value)}
                        />
                        <Input
                            variant="outlined"
                            label='Link'
                            value={this.props.links[i].link}
                            onChange={e => this.updateLink(i, e.target.value)}
                        />

                    </AccordionPanel>
                )
            }
        }
        return (
            <Card
                heading={this.props.header}

                icon={<Icon category="standard" name="link" size="small" />}
                headerActions={
                    !isEmpty && UI.getAdd(this.addLink)
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No links">
                            {UI.getAdd(this.addLink)}
                        </CardEmpty>
                    ) : null
                }
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                {links.length > 0 &&
                    <Accordion>
                        {links}
                    </Accordion>
                }


            </Card>
        )
    }
}


const mapStateToProps = state => {
    return state.links
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updateLabel: (id, label) => dispatch(Actions.updateLabel(id, label)),
        updateLink: (id, link) => dispatch(Actions.updateLink(id, link)),
        deleteLink: id => dispatch(Actions.deleteLink(id)),
        addLink: () => dispatch(Actions.addLink()),
       showToast: (heading, variant) => dispatch(showToast(heading, variant)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Links)