export default function Select({ value, setValue, options }) {
    return (
        <select
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
        >
            {options.map((o) => (
                <option key={o.id} value={o.id}>
                    {o.name}
                </option>
            ))}
        </select>
    );
}
