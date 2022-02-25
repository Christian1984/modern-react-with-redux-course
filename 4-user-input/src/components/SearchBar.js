import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    };

    onSubmitHandler(e) {
        e.preventDefault();
        console.log(this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={ e => this.onSubmitHandler(e) }>
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input 
                            type="text"
                            name="searchTerm"
                            placeholder="Search Term"
                            value={ this.state.searchTerm }
                            onChange={ e => this.setState({searchTerm: e.target.value}) }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar