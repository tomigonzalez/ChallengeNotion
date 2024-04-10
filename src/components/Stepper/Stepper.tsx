import { Box, Progress, useSteps } from "@chakra-ui/react";

const Steppers = () => {
  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const max = steps.length;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box position="relative">
      <Progress
        value={progressPercent}
        position="absolute"
        height="20px"
        width="full"
      />
    </Box>
  );
};

export default Steppers;
