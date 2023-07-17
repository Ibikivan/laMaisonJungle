import '../styles/Categories.css';

function handleSelection(event, setCategory) {
    setCategory(event.target.value);
}

function resetCategory(setCategory) {
    setCategory("---");
}

function Categories({ categories, category, setCategory }) {
    return (
        <div className="lmj-categories">
            <select
                value={category}
                onChange={(event) => handleSelection(event, setCategory)}
                className="lmj-categories-select"
            >
                <option value="---">---</option>

                {categories.map((category) => (
                    <option
                        key={category}
                        value={category}
                    >
                        {category}
                    </option>
                ))}
            </select>

            <button
                onClick={() => resetCategory(setCategory)}
                className="lmj-categories-reset"
            >Réinitialiser</button>
        </div>
    );
}

export default Categories;
