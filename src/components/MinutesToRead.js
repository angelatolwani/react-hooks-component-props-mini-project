function MinutesToRead( {minutes} ) {
    let emojiStr = "";
    if (minutes < 30) {
        const emojiVal = Math.ceil(minutes/5);
        let i=0;
        while ( i<emojiVal ) {
            emojiStr = emojiStr + "☕️";
            i = i+1;
        };
    } else {
        const emojiVal = Math.ceil(minutes/10);
        let i=0;
        while ( i<emojiVal ) {
            emojiStr = emojiStr + "🍱";
            i = i+1;
        };
    }
    return (
        <>
            {` ${emojiStr} `}
        </>
    );
};

export default MinutesToRead;