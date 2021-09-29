https://lofi-chill-beats.netlify.app/sakura

В FF проверить
Решить проблему с автостартом

https://github.com/remix-run/react-router/issues/3554

https://stackoverflow.com/questions/58575648/using-usestate-hook-in-useeffect-on-history-listen

const [isOpen, setIsOpen] = useState(false);
useEffect(() => {
history.listen(() => setIsOpen(false));
}, [history]);


https://stackoverflow.com/questions/60285627/does-props-history-listen-in-react-router-need-to-be-cleaned-up-in-useeffect-if

useEffect(() => {
const unlisten = props.history.listen(location => {
// do stuff here
});
return unlisten;
}, []);
