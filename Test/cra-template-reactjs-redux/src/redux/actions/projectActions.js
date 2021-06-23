import projectConstants from '../actionTypes';

const setProject = (data) => async (dispatch) => {
    try {
        dispatch({
            type: projectConstants.PROJECT_REQUEST,
        });

        dispatch({
            type: projectConstants.PROJECT_SUCCESS,
            payload: data,
        });
    } catch (e) {
        dispatch({
            type: projectConstants.PROJECT_FAILED,
            error: e,
        });
    }
};

export default setProject;
