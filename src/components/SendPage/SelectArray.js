export default function Select({ value, setValue, options }) {
    return (
        <select value={value} onChange={(e) => setValue(e.target.value)}>
            {options.map((o) => (
                <option key={o} value={o}>
                    {o}
                </option>
            ))}
        </select>
    );
}
