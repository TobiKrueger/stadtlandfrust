import {slfConnectionService  } from "../services/slfConnectionService";
import React from "react"

const slfConServ = new slfConnectionService()

const state = {slfConServ:slfConServ}

export const SlfContext = React.createContext(state)