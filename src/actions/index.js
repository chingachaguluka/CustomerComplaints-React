import React from 'react';
import axios from 'axios';

export const FETCH_COMPLAINTS = 'FETCH_COMPLAINTS';
export const FETCH_COMPLAINT = 'FETCH_COMPLAINT';

const ROOT_URL = 'http://localhost:2403/';

export function fetchComplaints() {
    const url = `${ROOT_URL}cases`;
    let request = axios.get(url);

    return {
        type: FETCH_COMPLAINTS,
        payload: request
    }
}

export function fetchComplaint(id) {
    const url = `${ROOT_URL}cases/${id}`;
    let request = axios.get(url);

    return {
        type: FETCH_COMPLAINT,
        payload: request
    }
}