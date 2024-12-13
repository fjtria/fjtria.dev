import './ThemeToggle.css';

// React Dark Mode Toggle: https://www.youtube.com/watch?v=sy-rRtT84CQ

export default function ThemeToggle({ handleChange, isChecked }) {
    return (
        <div className='container'>
            <label htmlFor='check'>
                <input
                    type='checkbox'
                    id='check'
                    onChange={handleChange}
                    checked={isChecked}
                />
                <span className='toggle'></span>
            </label>
        </div>
    );
};