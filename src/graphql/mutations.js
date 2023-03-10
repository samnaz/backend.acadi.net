/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      lastname
      media
      activities {
        items {
          id
          type
          typeId
          status
          meta
          createdAt
          updatedAt
          userActivitiesId
        }
        nextToken
      }
      userCourses {
        items {
          status
          id
          createdAt
          updatedAt
          userUserCoursesId
          courseUserCoursesId
        }
        nextToken
      }
      memberships {
        items {
          status
          type
          expires_at
          meta_stripe
          id
          createdAt
          updatedAt
          userMembershipsId
        }
        nextToken
      }
      biography
      church
      country
      interests
      rol
      customerStripe
      cognitoId
      coupons {
        items {
          id
          code
          description
          price
          status
          createdAt
          updatedAt
          userCouponsId
          couponUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      lastname
      media
      activities {
        items {
          id
          type
          typeId
          status
          meta
          createdAt
          updatedAt
          userActivitiesId
        }
        nextToken
      }
      userCourses {
        items {
          status
          id
          createdAt
          updatedAt
          userUserCoursesId
          courseUserCoursesId
        }
        nextToken
      }
      memberships {
        items {
          status
          type
          expires_at
          meta_stripe
          id
          createdAt
          updatedAt
          userMembershipsId
        }
        nextToken
      }
      biography
      church
      country
      interests
      rol
      customerStripe
      cognitoId
      coupons {
        items {
          id
          code
          description
          price
          status
          createdAt
          updatedAt
          userCouponsId
          couponUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      name
      lastname
      media
      activities {
        items {
          id
          type
          typeId
          status
          meta
          createdAt
          updatedAt
          userActivitiesId
        }
        nextToken
      }
      userCourses {
        items {
          status
          id
          createdAt
          updatedAt
          userUserCoursesId
          courseUserCoursesId
        }
        nextToken
      }
      memberships {
        items {
          status
          type
          expires_at
          meta_stripe
          id
          createdAt
          updatedAt
          userMembershipsId
        }
        nextToken
      }
      biography
      church
      country
      interests
      rol
      customerStripe
      cognitoId
      coupons {
        items {
          id
          code
          description
          price
          status
          createdAt
          updatedAt
          userCouponsId
          couponUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
      id
      name
      lastname
      media
      email
      avatar
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      position
      createdAt
      updatedAt
    }
  }
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
      id
      name
      lastname
      media
      email
      avatar
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      position
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
      id
      name
      lastname
      media
      email
      avatar
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      position
      createdAt
      updatedAt
    }
  }
`;
export const createUserCourse = /* GraphQL */ `
  mutation CreateUserCourse(
    $input: CreateUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    createUserCourse(input: $input, condition: $condition) {
      status
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      id
      createdAt
      updatedAt
      userUserCoursesId
      courseUserCoursesId
    }
  }
`;
export const updateUserCourse = /* GraphQL */ `
  mutation UpdateUserCourse(
    $input: UpdateUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    updateUserCourse(input: $input, condition: $condition) {
      status
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      id
      createdAt
      updatedAt
      userUserCoursesId
      courseUserCoursesId
    }
  }
`;
export const deleteUserCourse = /* GraphQL */ `
  mutation DeleteUserCourse(
    $input: DeleteUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    deleteUserCourse(input: $input, condition: $condition) {
      status
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      id
      createdAt
      updatedAt
      userUserCoursesId
      courseUserCoursesId
    }
  }
`;
export const createMembership = /* GraphQL */ `
  mutation CreateMembership(
    $input: CreateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    createMembership(input: $input, condition: $condition) {
      status
      type
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      expires_at
      meta_stripe
      packCourses {
        courseId
        addedDate
      }
      id
      createdAt
      updatedAt
      userMembershipsId
    }
  }
`;
export const updateMembership = /* GraphQL */ `
  mutation UpdateMembership(
    $input: UpdateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    updateMembership(input: $input, condition: $condition) {
      status
      type
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      expires_at
      meta_stripe
      packCourses {
        courseId
        addedDate
      }
      id
      createdAt
      updatedAt
      userMembershipsId
    }
  }
`;
export const deleteMembership = /* GraphQL */ `
  mutation DeleteMembership(
    $input: DeleteMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    deleteMembership(input: $input, condition: $condition) {
      status
      type
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      expires_at
      meta_stripe
      packCourses {
        courseId
        addedDate
      }
      id
      createdAt
      updatedAt
      userMembershipsId
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      name
      title
      description
      author {
        id
        name
        lastname
        media
        email
        avatar
        courses {
          nextToken
        }
        position
        createdAt
        updatedAt
      }
      category {
        id
        name
        courses {
          nextToken
        }
        color
        createdAt
        updatedAt
      }
      priceId
      price
      discount
      hours
      image
      poster
      video
      vimeo_id
      rating
      topic
      subtopics {
        items {
          id
          text
          createdAt
          updatedAt
          courseSubtopicsId
        }
        nextToken
      }
      lessons {
        items {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        nextToken
      }
      userCourses {
        items {
          status
          id
          createdAt
          updatedAt
          userUserCoursesId
          courseUserCoursesId
        }
        nextToken
      }
      language
      pack {
        id
        description
        price
        status
        courses {
          nextToken
        }
        priceId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      authorCoursesId
      categoryCoursesId
      packCoursesId
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      name
      title
      description
      author {
        id
        name
        lastname
        media
        email
        avatar
        courses {
          nextToken
        }
        position
        createdAt
        updatedAt
      }
      category {
        id
        name
        courses {
          nextToken
        }
        color
        createdAt
        updatedAt
      }
      priceId
      price
      discount
      hours
      image
      poster
      video
      vimeo_id
      rating
      topic
      subtopics {
        items {
          id
          text
          createdAt
          updatedAt
          courseSubtopicsId
        }
        nextToken
      }
      lessons {
        items {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        nextToken
      }
      userCourses {
        items {
          status
          id
          createdAt
          updatedAt
          userUserCoursesId
          courseUserCoursesId
        }
        nextToken
      }
      language
      pack {
        id
        description
        price
        status
        courses {
          nextToken
        }
        priceId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      authorCoursesId
      categoryCoursesId
      packCoursesId
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      name
      title
      description
      author {
        id
        name
        lastname
        media
        email
        avatar
        courses {
          nextToken
        }
        position
        createdAt
        updatedAt
      }
      category {
        id
        name
        courses {
          nextToken
        }
        color
        createdAt
        updatedAt
      }
      priceId
      price
      discount
      hours
      image
      poster
      video
      vimeo_id
      rating
      topic
      subtopics {
        items {
          id
          text
          createdAt
          updatedAt
          courseSubtopicsId
        }
        nextToken
      }
      lessons {
        items {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        nextToken
      }
      userCourses {
        items {
          status
          id
          createdAt
          updatedAt
          userUserCoursesId
          courseUserCoursesId
        }
        nextToken
      }
      language
      pack {
        id
        description
        price
        status
        courses {
          nextToken
        }
        priceId
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      authorCoursesId
      categoryCoursesId
      packCoursesId
    }
  }
`;
export const createSubtopic = /* GraphQL */ `
  mutation CreateSubtopic(
    $input: CreateSubtopicInput!
    $condition: ModelSubtopicConditionInput
  ) {
    createSubtopic(input: $input, condition: $condition) {
      id
      text
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      createdAt
      updatedAt
      courseSubtopicsId
    }
  }
`;
export const updateSubtopic = /* GraphQL */ `
  mutation UpdateSubtopic(
    $input: UpdateSubtopicInput!
    $condition: ModelSubtopicConditionInput
  ) {
    updateSubtopic(input: $input, condition: $condition) {
      id
      text
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      createdAt
      updatedAt
      courseSubtopicsId
    }
  }
`;
export const deleteSubtopic = /* GraphQL */ `
  mutation DeleteSubtopic(
    $input: DeleteSubtopicInput!
    $condition: ModelSubtopicConditionInput
  ) {
    deleteSubtopic(input: $input, condition: $condition) {
      id
      text
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      createdAt
      updatedAt
      courseSubtopicsId
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      color
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      color
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      color
      createdAt
      updatedAt
    }
  }
`;
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      type
      typeId
      status
      meta
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userActivitiesId
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
      id
      type
      typeId
      status
      meta
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userActivitiesId
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
      id
      type
      typeId
      status
      meta
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userActivitiesId
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      title
      description
      content
      pdf_link
      image_url
      vimeo_id
      order
      time
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      test {
        id
        description
        lesson {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        questions {
          id
          question
        }
        createdAt
        updatedAt
        testLessonId
      }
      createdAt
      updatedAt
      courseLessonsId
      lessonTestId
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      title
      description
      content
      pdf_link
      image_url
      vimeo_id
      order
      time
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      test {
        id
        description
        lesson {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        questions {
          id
          question
        }
        createdAt
        updatedAt
        testLessonId
      }
      createdAt
      updatedAt
      courseLessonsId
      lessonTestId
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      title
      description
      content
      pdf_link
      image_url
      vimeo_id
      order
      time
      course {
        id
        name
        title
        description
        author {
          id
          name
          lastname
          media
          email
          avatar
          position
          createdAt
          updatedAt
        }
        category {
          id
          name
          color
          createdAt
          updatedAt
        }
        priceId
        price
        discount
        hours
        image
        poster
        video
        vimeo_id
        rating
        topic
        subtopics {
          nextToken
        }
        lessons {
          nextToken
        }
        userCourses {
          nextToken
        }
        language
        pack {
          id
          description
          price
          status
          priceId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        authorCoursesId
        categoryCoursesId
        packCoursesId
      }
      test {
        id
        description
        lesson {
          id
          title
          description
          content
          pdf_link
          image_url
          vimeo_id
          order
          time
          createdAt
          updatedAt
          courseLessonsId
          lessonTestId
        }
        questions {
          id
          question
        }
        createdAt
        updatedAt
        testLessonId
      }
      createdAt
      updatedAt
      courseLessonsId
      lessonTestId
    }
  }
`;
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
      id
      description
      lesson {
        id
        title
        description
        content
        pdf_link
        image_url
        vimeo_id
        order
        time
        course {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        test {
          id
          description
          createdAt
          updatedAt
          testLessonId
        }
        createdAt
        updatedAt
        courseLessonsId
        lessonTestId
      }
      questions {
        id
        question
        options {
          order
          answer
          correct
        }
      }
      createdAt
      updatedAt
      testLessonId
    }
  }
`;
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
      id
      description
      lesson {
        id
        title
        description
        content
        pdf_link
        image_url
        vimeo_id
        order
        time
        course {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        test {
          id
          description
          createdAt
          updatedAt
          testLessonId
        }
        createdAt
        updatedAt
        courseLessonsId
        lessonTestId
      }
      questions {
        id
        question
        options {
          order
          answer
          correct
        }
      }
      createdAt
      updatedAt
      testLessonId
    }
  }
`;
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
      id
      description
      lesson {
        id
        title
        description
        content
        pdf_link
        image_url
        vimeo_id
        order
        time
        course {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        test {
          id
          description
          createdAt
          updatedAt
          testLessonId
        }
        createdAt
        updatedAt
        courseLessonsId
        lessonTestId
      }
      questions {
        id
        question
        options {
          order
          answer
          correct
        }
      }
      createdAt
      updatedAt
      testLessonId
    }
  }
`;
export const createPack = /* GraphQL */ `
  mutation CreatePack(
    $input: CreatePackInput!
    $condition: ModelPackConditionInput
  ) {
    createPack(input: $input, condition: $condition) {
      id
      description
      price
      status
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      priceId
      createdAt
      updatedAt
    }
  }
`;
export const updatePack = /* GraphQL */ `
  mutation UpdatePack(
    $input: UpdatePackInput!
    $condition: ModelPackConditionInput
  ) {
    updatePack(input: $input, condition: $condition) {
      id
      description
      price
      status
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      priceId
      createdAt
      updatedAt
    }
  }
`;
export const deletePack = /* GraphQL */ `
  mutation DeletePack(
    $input: DeletePackInput!
    $condition: ModelPackConditionInput
  ) {
    deletePack(input: $input, condition: $condition) {
      id
      description
      price
      status
      courses {
        items {
          id
          name
          title
          description
          priceId
          price
          discount
          hours
          image
          poster
          video
          vimeo_id
          rating
          topic
          language
          createdAt
          updatedAt
          authorCoursesId
          categoryCoursesId
          packCoursesId
        }
        nextToken
      }
      priceId
      createdAt
      updatedAt
    }
  }
`;
export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
      id
      code
      description
      price
      status
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCouponsId
      couponUserId
    }
  }
`;
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
      id
      code
      description
      price
      status
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCouponsId
      couponUserId
    }
  }
`;
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
      id
      code
      description
      price
      status
      user {
        id
        email
        name
        lastname
        media
        activities {
          nextToken
        }
        userCourses {
          nextToken
        }
        memberships {
          nextToken
        }
        biography
        church
        country
        interests
        rol
        customerStripe
        cognitoId
        coupons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCouponsId
      couponUserId
    }
  }
`;
