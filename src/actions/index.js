import React from 'react';
import axios from 'axios';

export const FETCH_COMPLAINTS = 'FETCH_COMPLAINTS';

const ROOT_URL = 'http://localhost:2403/';

export function fetchComplaints() {
    const url = `${ROOT_URL}cases`;
    let request = axios.get(url);
    console.log(request);

    return {
        type: FETCH_COMPLAINTS,
        payload: request
    }
}