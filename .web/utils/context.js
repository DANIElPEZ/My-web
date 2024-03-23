import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.state": {"cm": [], "comsend": "", "name": "", "poswmsgcm": 2, "poswmsgnm": 2, "wmsgcm": ["ponga su comentario", "Solo se admite letras y numeros", ""], "wmsgcolors": ["#f8d7da", "#fff3cd"], "wmsgnm": ["Ponga su nombre", "Solo se admite letras", ""]}, "state.on_load_internal_state": {}, "state.paper_rock_sisor": {"colorq": ["#00ff00", "#ff0000", "#7fffd4"], "img": ["/p.png", "/pp.png", "/ppp.png", "/question.jpg"], "pos": 3, "ptsmachine": "0", "ptspc": 0, "ptsplay": 0, "ptsplayer": "0", "qpos": 3, "question": ["Gana Jugador", "Gana Computador", "Empate", ""], "rta": ["Piedra", "Papel", "Tijera", ""]}, "state.open": {"sidebar": false}, "state.update_vars_internal_state": {}, "state.poner": {"a": "", "b": "", "c": "", "d": "", "e": "", "f": "", "g": "", "h": "", "i": "", "j": "", "k": "", "l": "", "v1": "", "v2": "", "v3": ""}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__state: createContext(null),
  state__on_load_internal_state: createContext(null),
  state__paper_rock_sisor: createContext(null),
  state__open: createContext(null),
  state__update_vars_internal_state: createContext(null),
  state__poner: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const state_name = "state"

// Theses events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'state.update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('state.on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const [state__on_load_internal_state, dispatch_state__on_load_internal_state] = useReducer(applyDelta, initialState["state.on_load_internal_state"])
  const [state__paper_rock_sisor, dispatch_state__paper_rock_sisor] = useReducer(applyDelta, initialState["state.paper_rock_sisor"])
  const [state__open, dispatch_state__open] = useReducer(applyDelta, initialState["state.open"])
  const [state__update_vars_internal_state, dispatch_state__update_vars_internal_state] = useReducer(applyDelta, initialState["state.update_vars_internal_state"])
  const [state__poner, dispatch_state__poner] = useReducer(applyDelta, initialState["state.poner"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.state": dispatch_state__state,
      "state.on_load_internal_state": dispatch_state__on_load_internal_state,
      "state.paper_rock_sisor": dispatch_state__paper_rock_sisor,
      "state.open": dispatch_state__open,
      "state.update_vars_internal_state": dispatch_state__update_vars_internal_state,
      "state.poner": dispatch_state__poner,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__state.Provider value={ state__state }>
    <StateContexts.state__on_load_internal_state.Provider value={ state__on_load_internal_state }>
    <StateContexts.state__paper_rock_sisor.Provider value={ state__paper_rock_sisor }>
    <StateContexts.state__open.Provider value={ state__open }>
    <StateContexts.state__update_vars_internal_state.Provider value={ state__update_vars_internal_state }>
    <StateContexts.state__poner.Provider value={ state__poner }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__poner.Provider>
    </StateContexts.state__update_vars_internal_state.Provider>
    </StateContexts.state__open.Provider>
    </StateContexts.state__paper_rock_sisor.Provider>
    </StateContexts.state__on_load_internal_state.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state.Provider>
  )
}