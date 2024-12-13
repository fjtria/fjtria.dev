import './ThemeToggle.css';

// React Dark Mode Toggle: https://www.youtube.com/watch?v=sy-rRtT84CQ

export default function ThemeToggle({ handleChange, isChecked }) {
    return (
        <div className='container'>
            <input
                type='checkbox'
                id='check'
                className='toggle'
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor='check'>Dark Mode</label>
        </div>
    );
};