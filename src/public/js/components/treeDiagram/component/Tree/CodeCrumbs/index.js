import React from 'react';
import { connect } from 'react-redux';

import { selectCodeCrumb } from 'components/dataBus/store/actions';
import {
  getSource,
  getSourceLayout,
  getCodeCrumbsUserChoice
} from 'components/dataBus/store/selectors';
import { getCheckedState } from 'components/controls/ViewSwitches/store/selectors';
import Tree from './Tree';

const mapStateToProps = (state, props) => {
  const { filesMap } = getSource(state);
  const { filesLayoutMap } = getSourceLayout(state);
  const { selectedCrumbedFlowKey } = getCodeCrumbsUserChoice(state);
  const {
    sourceDiagramOn,
    dependenciesDiagramOn,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,
    codeCrumbsLineNumbers
  } = getCheckedState(state);

  return {
    filesLayoutMap,
    filesMap,
    selectedCrumbedFlowKey,
    sourceDiagramOn,
    dependenciesDiagramOn,
    codeCrumbsDiagramOn,
    codeCrumbsMinimize,
    codeCrumbsLineNumbers
  };
};

const mapDispatchToProps = {
  onCodeCrumbSelect: selectCodeCrumb
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tree);