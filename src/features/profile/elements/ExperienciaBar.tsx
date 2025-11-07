
export const ExperienciaBar = () => {
  return (
    <div className="flex-1">
      <div className="w-full bg-neutral-900 rounded-full h-2">
        <div
          className="h-2 rounded-full bg-linear-to-r from-primary-500 to-secondary-500"
          style={{ width: "50%" }}
        />
      </div>
      <div className="flex justify-between pt-2">
        <p className="font-body-extrasmall-medium">463,804 PX</p>
        <p className="font-body-extrasmall-medium text-neutral-50">
          660,000 PX
        </p>
      </div>
    </div>
  );
};
