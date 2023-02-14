import { useState } from "react";
import { useDispatch } from "react-redux";
//-- hook from react-redux library, it gives us access to dispatch function directly inside the component.
//-- so we can use this function to manually dispatch an action creator. Also need to import action-creator
import { actionCreators } from "../state";

/// ---------------------------------
import { useActions } from "../hooks/useActions";

//-- to get access to some state that is stored in redux-store we use useSelector.
//-- this hook is similar to nature with mapStateToProps uses in class based components

import { useSelector } from "react-redux";

import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");

  // const dispatch = useDispatch(); //-- to get reference to dispatch function

  const { searchRepositories } = useActions();

  //--  const state = useSelector((state) => state);
  //--  const state = useSelector((state : any) => state.repositories);
  //--  const {data, loading, error} = useSelector((state : any) => state.repositories);
  //--  console.log(state);

  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  //the function inside useSelector gets the entire state object as the argument.

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading....Please wait!</h3>}
      <ul>{!error && !loading && data.map((name) => <li>{name}</li>)}</ul>
    </div>
  );
};

export default RepositoriesList;
