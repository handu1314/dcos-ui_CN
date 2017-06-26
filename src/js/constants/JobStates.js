const JobStates = {
  INITIAL: {
    stateTypes: ["active"],
    displayName: "启动"
  },
  STARTING: {
    stateTypes: ["active"],
    displayName: "启动"
  },
  ACTIVE: {
    stateTypes: ["active"],
    displayName: "运行中"
  },
  FAILED: {
    stateTypes: ["completed", "failure"],
    displayName: "执行失败"
  },
  SUCCESS: {
    stateTypes: ["success"],
    displayName: "执行成功"
  },
  COMPLETED: {
    stateTypes: ["success"],
    displayName: "完成"
  },
  SCHEDULED: {
    stateTypes: [],
    displayName: "已调度"
  },
  UNSCHEDULED: {
    stateTypes: [],
    displayName: "未调度"
  }
};

module.exports = JobStates;
