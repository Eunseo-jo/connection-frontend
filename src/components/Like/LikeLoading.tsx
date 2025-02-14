import { motion } from 'framer-motion';

const LikeLoading = ({ liked }: { liked: boolean }) => {
  const visibleFill = liked ? 'var(--gray5)' : 'var(--main-color-transparent)';
  const stroke = liked ? 'stroke-gray-500' : 'stroke-main-color';

  const icon = {
    hidden: {
      pathLength: 0,
      fill: '#ffffff',
    },
    visible: {
      pathLength: 1,
      fill: visibleFill,
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="30"
      viewBox="0 0 30 29"
      className={stroke}
    >
      <motion.path
        d="M15.8533 23.1578C15.5167 23.4128 15.2271 23.6234 14.9999 23.7849C14.7727 23.6233 14.4831 23.4127 14.1464 23.1577C13.283 22.5037 12.1157 21.5624 10.9007 20.414C8.43486 18.0834 5.91948 15.036 5.16991 11.9009C4.77109 10.22 5.07827 8.25908 6.0421 6.86918C6.95993 5.5456 8.51101 4.67289 10.8757 5.11644L10.8782 5.11691C11.6718 5.26367 12.472 5.87517 13.1364 6.58822C13.4534 6.9285 13.7097 7.25953 13.8864 7.50549C13.9743 7.62784 14.0414 7.7275 14.0852 7.79461C14.1071 7.82811 14.1232 7.85338 14.1331 7.86914L14.1432 7.88547L14.1439 7.88654L14.1441 7.88694L14.1443 7.88727L14.1446 7.88775L14.1448 7.88797L14.9961 9.2974L15.8529 7.89125L15.8531 7.89105L15.8534 7.89058L15.8536 7.89025L15.8538 7.88985L15.8545 7.88873L15.8648 7.87239C15.8747 7.85662 15.8909 7.83139 15.9129 7.79794C15.9571 7.73094 16.0245 7.63146 16.1128 7.50931C16.2904 7.26377 16.5477 6.93316 16.8657 6.59296C17.5316 5.88046 18.3332 5.26709 19.1252 5.11621C21.4893 4.67319 23.0402 5.54586 23.958 6.86922C24.9218 8.25898 25.229 10.2196 24.83 11.9003C24.0806 15.0361 21.565 18.0837 19.099 20.4143C17.884 21.5627 16.7168 22.5039 15.8533 23.1578Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          },
          fill: {
            duration: 2,
            ease: [1, 0, 0.8, 1],
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      />
    </motion.svg>
  );
};

export default LikeLoading;
