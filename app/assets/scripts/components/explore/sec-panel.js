import React, { useContext, useState } from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import Panel from '../common/panel';
import {
  PanelBlock,
  PanelBlockHeader,
  PanelBlockBody,
  PanelBlockFooter
} from '../common/panel-block';

import SubmitIssueTray from './submit-issue-tray';

import Heading from '../../styles/type/heading';

import media, { isLargeViewport } from '../../styles/utils/media-queries';
import Prose from '../../styles/type/prose';

import ExploreContext from '../../context/explore-context';
import FormContext from '../../context/form-context';

import ZoneAnalysisPanel from './zone-analysis-panel';

import Button from '../../styles/button/button';

const SecPanel = styled(Panel)`
  ${media.largeUp`
    width: 18rem;
  `}
  ${media.xlargeUp`
    width: 22rem;
  `}
`;
const PreAnalysisMessage = styled(Prose)`
  padding: 1rem 1.5rem;
  text-align: center;
`;

function ExpMapSecPanel (props) {
  const { onPanelChange } = props;
  const { currentZones } = useContext(ExploreContext);
  const { inputTouched } = useContext(FormContext);
  const [showSubmitIssuePanel, setShowSubmitIssuePanel] = useState(false);

  return (
    <SecPanel
      collapsible
      direction='right'
      onPanelChange={onPanelChange}
      initialState={isLargeViewport()}
      bodyContent={
        <>
          <PanelBlock>
            <PanelBlockHeader>
              <Heading>
                Zone Analysis
              </Heading>
            </PanelBlockHeader>
            <PanelBlockBody>
              {currentZones.isReady()
                ? (
                  <ZoneAnalysisPanel
                    currentZones={currentZones.getData()}
                    inputTouched={inputTouched}
                  />) : (
                  <PreAnalysisMessage>{currentZones.fetching ? 'Loading...' : 'Apply parameters (Spatial filters, Weights & LCOE Economic inputs) and click "Generate Zones" to load zone analysis.'}</PreAnalysisMessage>
                )}

            </PanelBlockBody>
            <PanelBlockFooter>
              <div style={{align: "center", display:'grid'}}>
                <hr /> 
                <Button
                    id='toggle-feedback-tray'
                    variation='primary-raised-dark'
                    width='100%'
                    style={{align: "center"}}
                    onClick={() => {
                      setShowSubmitIssuePanel(!showSubmitIssuePanel);
                    }}
                  >
                    <span >{showSubmitIssuePanel ? "Hide" : "Show"} Feedback Form</span>
                </Button>
                <SubmitIssueTray 
                    show={showSubmitIssuePanel}
                    className='submit-issue-tray'
                  />
              </div>
              </PanelBlockFooter>
          </PanelBlock>
        </>
      }
    />
  );
}

ExpMapSecPanel.propTypes = {
  onPanelChange: T.func
};

export default ExpMapSecPanel;
